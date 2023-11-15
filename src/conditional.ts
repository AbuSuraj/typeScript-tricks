type OriginalType = {
    id: number;
    name: string;
    age: number;
  };
  
  type NewType = Omit<OriginalType, 'age'>;
  
  // NewType is { id: number; name: string; }
  
//   another way is 

type CopyType <T,K> = T extends K ? never: T; 
type CurrentType = CopyType<OriginalType, 'age'>