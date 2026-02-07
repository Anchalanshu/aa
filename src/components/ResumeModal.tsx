import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Anchal_CV%20Final-3.pdf";
    link.download = "Anchal_Chauhan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="p-6 border-b border-border/50 flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl font-display-semibold">My Resume</DialogTitle>
          <div className="flex gap-2">
            <Button
              onClick={handleDownload}
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
              size="sm"
            >
              <Download size={16} />
              Download
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="border-border"
              size="sm"
            >
              <X size={16} />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="overflow-auto max-h-[calc(90vh-80px)]">
          <iframe
            src="/Anchal_CV%20Final-3.pdf"
            className="w-full h-full min-h-[600px]"
            title="Resume PDF"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
