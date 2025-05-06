
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

interface ContactStudentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  onSubmit: (message: string) => void;
}

const ContactStudentDialog: React.FC<ContactStudentDialogProps> = ({
  isOpen,
  onClose,
  studentName,
  onSubmit,
}) => {
  const form = useForm({
    defaultValues: {
      message: '',
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    onSubmit(data.message);
    form.reset();
    onClose();
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact {studentName}</DialogTitle>
          <DialogDescription>
            Send a message to the student. They will receive this via email.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Send Message</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactStudentDialog;
