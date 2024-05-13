export type Comments = {
    id: number;
    name: string;
    comment: string;
  };


  export interface AddCommentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (newComment: Partial<Comments>) => void;
  }
  