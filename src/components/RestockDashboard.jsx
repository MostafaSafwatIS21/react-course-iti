import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { InventoryTask } from "./InventoryTask";

export default function RestockDashboard() {
  // Hardcoded Tasks
  const tasks = [
    "Label 50 MacBooks",
    "Restock Sony WH-1000XM5 headphones",
    "Update inventory count for Classic White T-Shirt",
    "Check quality of new Levi's jeans batch",
    "Prepare shipment for Samsung Galaxy S24 Ultra",
    "Organize Nespresso capsules in section B",
    "Verify stock for Keychron keyboards",
  ];

  return (
    <div className="p-8 flex justify-center bg-gray-50 min-h-screen">
      <Card className="w-full max-w-md shadow-sm border-gray-200 h-fit">
        <CardHeader className="border-b bg-gray-50/50 rounded-t-xl pb-4">
          <CardTitle className="text-xl font-bold text-gray-900">
            Warehouse Task List
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          {/* ScrollArea لضمان شكل ثابت حتى لو المهام كتير */}
          <ScrollArea className="h-[400px] w-full pr-4">
            {tasks.map((task, index) => (
              <InventoryTask key={index} taskName={task} />
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
