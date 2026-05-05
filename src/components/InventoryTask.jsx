import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export function InventoryTask({ taskName }) {
  // حالة الاكتمال: تتحكم في شكل النص
  const [isCompleted, setIsCompleted] = useState(false);

  // حالة الظهور: لو فولس، المكون مش هيتعمل له رندر أصلاً
  const [isVisible, setIsVisible] = useState(true);

  // Visibility Logic
  if (!isVisible) return null;

  return (
    <div className="flex items-center justify-between p-3 border rounded-lg mb-3 bg-white transition-all hover:border-gray-300">
      <div className="flex items-center space-x-3">
        {/* Completion Logic */}
        <Checkbox
          id={`task-${taskName}`}
          checked={isCompleted}
          onCheckedChange={(checked) => setIsCompleted(checked)}
        />
        <label
          htmlFor={`task-${taskName}`}
          className={`text-sm font-medium leading-none cursor-pointer transition-colors ${
            isCompleted
              ? "line-through text-muted-foreground"
              : "text-foreground"
          }`}
        >
          {taskName}
        </label>
      </div>

      {/* Delete Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsVisible(false)}
        className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 w-8"
      >
        <Trash2 className="h-4 w-4" />
        <span className="sr-only">Delete task</span>
      </Button>
    </div>
  );
}
