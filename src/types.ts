export interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
  isEditing?: boolean; // Optional property to track editing state
}
