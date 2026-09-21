import { FormEvent, useEffect, useState } from 'react';
import { z } from 'zod';
import { CalendarDays, CheckCircle2, Clock3 } from 'lucide-react';
import { Button, type ButtonProps } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const bookingSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.').max(100, 'Name must be under 100 characters.'),
  email: z.string().trim().email('Please enter a valid email address.').max(255, 'Email must be under 255 characters.'),
  phone: z.string().trim().max(30, 'Phone number must be under 30 characters.').refine(
    (value) => value === '' || /^[+\d\s().-]{7,30}$/.test(value),
    'Please enter a valid phone number.',
  ),
  business: z.string().trim().max(120, 'Business name must be under 120 characters.'),
  date: z.string().min(1, 'Please choose a preferred date.'),
  time: z.string().min(1, 'Please choose a preferred time.'),
  details: z.string().trim().min(10, 'Please share at least 10 characters about your project.').max(1000, 'Project details must be under 1,000 characters.'),
  duration: z.enum(['30', '60']),
});

type BookingData = z.infer<typeof bookingSchema>;
type BookingField = keyof BookingData;

type ConsultationBookingDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: string;
};

const initialForm: BookingData = {
  name: '',
  email: '',
  phone: '',
  business: '',
  date: '',
  time: '',
  details: '',
  duration: '30',
};

const ConsultationBookingDialog = ({ open, onOpenChange, service }: ConsultationBookingDialogProps) => {
  const [formData, setFormData] = useState<BookingData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<BookingField, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setErrors({});
      setFormData(initialForm);
    }
  }, [open]);

  const updateField = (field: BookingField, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = bookingSchema.safeParse(formData);

    if (!result.success) {
      const nextErrors: Partial<Record<BookingField, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as BookingField | undefined;
        if (field && !nextErrors[field]) nextErrors[field] = issue.message;
      });
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto bg-white text-gray-900 sm:rounded-lg">
        {submitted ? (
          <div className="py-10 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-green-600" />
            <DialogTitle className="mt-5 text-2xl">Your consultation request is ready</DialogTitle>
            <DialogDescription className="mx-auto mt-3 max-w-md text-base leading-7 text-gray-600">
              Thanks, {formData.name.trim()}. Your {formData.duration}-minute call request for {service} has been recorded. I’ll follow up at {formData.email.trim()} to confirm the time.
            </DialogDescription>
            <Button className="mt-7" onClick={() => onOpenChange(false)}>Done</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Book a free consultation</DialogTitle>
              <DialogDescription className="text-gray-600">
                Tell me a little about your {service.toLowerCase()} needs and choose a preferred time.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-2 space-y-5" noValidate>
              <fieldset>
                <legend className="mb-2 text-sm font-medium text-gray-800">Call length</legend>
                <div className="grid grid-cols-2 gap-3">
                  {(['30', '60'] as const).map((duration) => (
                    <label
                      key={duration}
                      className={`flex cursor-pointer items-center gap-3 rounded-md border p-4 transition-colors ${formData.duration === duration ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white hover:bg-gray-50'}`}
                    >
                      <input
                        type="radio"
                        name="duration"
                        value={duration}
                        checked={formData.duration === duration}
                        onChange={(event) => updateField('duration', event.target.value)}
                        className="h-4 w-4 accent-blue-600"
                      />
                      <Clock3 className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-semibold">{duration} minutes</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name" error={errors.name} required>
                  <Input value={formData.name} onChange={(event) => updateField('name', event.target.value)} maxLength={100} autoComplete="name" aria-invalid={Boolean(errors.name)} />
                </Field>
                <Field label="Email address" error={errors.email} required>
                  <Input type="email" value={formData.email} onChange={(event) => updateField('email', event.target.value)} maxLength={255} autoComplete="email" aria-invalid={Boolean(errors.email)} />
                </Field>
                <Field label="Phone number" error={errors.phone}>
                  <Input type="tel" value={formData.phone} onChange={(event) => updateField('phone', event.target.value)} maxLength={30} autoComplete="tel" placeholder="Optional" aria-invalid={Boolean(errors.phone)} />
                </Field>
                <Field label="Business name" error={errors.business}>
                  <Input value={formData.business} onChange={(event) => updateField('business', event.target.value)} maxLength={120} autoComplete="organization" placeholder="Optional" aria-invalid={Boolean(errors.business)} />
                </Field>
                <Field label="Preferred date" error={errors.date} required>
                  <div className="relative">
                    <CalendarDays className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                    <Input type="date" min={today} value={formData.date} onChange={(event) => updateField('date', event.target.value)} className="pl-9" aria-invalid={Boolean(errors.date)} />
                  </div>
                </Field>
                <Field label="Preferred time" error={errors.time} required>
                  <Input type="time" value={formData.time} onChange={(event) => updateField('time', event.target.value)} aria-invalid={Boolean(errors.time)} />
                </Field>
              </div>

              <Field label="What would you like to discuss?" error={errors.details} required>
                <Textarea
                  value={formData.details}
                  onChange={(event) => updateField('details', event.target.value)}
                  maxLength={1000}
                  rows={4}
                  placeholder="Briefly describe your website, goals, and what you need help with."
                  aria-invalid={Boolean(errors.details)}
                />
                <p className="mt-1 text-right text-xs text-gray-500">{formData.details.length}/1000</p>
              </Field>

              <div className="flex flex-col-reverse gap-3 border-t border-gray-200 pt-5 sm:flex-row sm:justify-end">
                <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
                <Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Request free call
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

type ConsultationBookingButtonProps = ButtonProps & {
  service: string;
};

export const ConsultationBookingButton = ({ service, children, ...buttonProps }: ConsultationBookingButtonProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button {...buttonProps} onClick={() => setOpen(true)}>{children}</Button>
      <ConsultationBookingDialog open={open} onOpenChange={setOpen} service={service} />
    </>
  );
};

type FieldProps = {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
};

const Field = ({ label, error, required, children }: FieldProps) => (
  <div>
    <Label className="mb-2 block text-sm text-gray-800">
      {label}{required ? <span className="text-red-600"> *</span> : null}
    </Label>
    {children}
    {error ? <p className="mt-1 text-sm text-red-600" role="alert">{error}</p> : null}
  </div>
);

export default ConsultationBookingDialog;