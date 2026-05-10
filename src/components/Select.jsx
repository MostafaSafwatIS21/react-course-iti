import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import categories from "../data/category.json";

export function Select({ setSearchParams }) {
  return (
    <NativeSelect
      onChange={(e) => setSearchParams({ category: e.target.value })}
    >
      <NativeSelectOption value="">Select Category</NativeSelectOption>
      {categories.map((category) => (
        <NativeSelectOption key={category.id} value={category.name}>
          {category.name}
        </NativeSelectOption>
      ))}
    </NativeSelect>
  );
}
