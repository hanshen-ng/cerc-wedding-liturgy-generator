import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLoaderData, useNavigate } from "react-router";
import { useState } from "react";
import type { Template } from "@/src/type-definitions";

function HomePage() {
  const { templates }: { templates: Template[] } = useLoaderData();

  const navigate = useNavigate();
  const [searchbarValue, setSearchbarValue] = useState("");

  const handleTemplateClicked = (templateId: string) => {
    // console.log(`handleTemplateClicked(): ${templateId}`);
    navigate("/");
  };

  const handleSearchbarChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchbarValue(event.target.value);
  };

  const filteredTemplates: Template[] = templates.filter((template: Template) =>
    template.name.toLowerCase().includes(searchbarValue)
  );

  return (
    <div className="flex flex-col max-w-screen max-h-screen p-5 gap-y-6">
      {/* Header */}
      <div className="flex flex-row w-full justify-between gap-x-5">
        <Input
          placeholder="Search template..."
          onChange={handleSearchbarChange}
          value={searchbarValue}
        />
        <div className="flex flex-row gap-x-2">
          <Button variant="ghost">Add Template</Button>
          <Button className="submit">Generate</Button>
        </div>
      </div>
      {/* Template List */}
      <ScrollArea className="flex grow overflow-auto rounded-md border">
        <div className="flex flex-col p-4 gap-y-2">
          {filteredTemplates.length > 0 ? (
            filteredTemplates.map((template: Template) => (
              <React.Fragment key={`${template.name}-${template.id}`}>
                <Button
                  variant="link"
                  className="p-4"
                  onClick={() => handleTemplateClicked(template.id)}
                >
                  <p className="w-full text-left">{template.name}</p>
                </Button>
              </React.Fragment>
            ))
          ) : (
            <p>No data</p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}

export default HomePage;
