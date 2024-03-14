import { Button, ComboBox, Input, Label, ListBox, ListBoxItem, Popover } from "react-aria-components";

const items = Array(50)
  .fill(undefined)
  .map((_, index) => ({ id: `${index}`, text: `This is the item ${index}` }));

export default function SearchPage() {
  return (
    <div className="flex h-dvh w-full flex-col bg-zinc-800 p-4 text-white">
      <ComboBox>
        <Label>Please select</Label>
        <div>
          <Input />
          <Button>▼</Button>
        </div>
        <Popover>
          <ListBox items={items} className="p-1 max-h-[inherit] overflow-auto">
            {(item) => (
              <ListBoxItem className="text-white" key={item.id}>
                {item.text}
              </ListBoxItem>
            )}
          </ListBox>
        </Popover>
      </ComboBox>
    </div>
  );
}
