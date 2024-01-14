"use client";
import { cn } from "@/lib/utils";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { Grip } from "lucide-react";
import { useState } from "react";

const SheduleList = () => {
  const [shedulearr, setshedulearr] = useState([
    {
      name: "maths",
      time: "10:00-10:45",
    },
    {
      name: "Science",
      time: "10:00-10:45",
    },
    {
      name: "Population",
      time: "10:00-10:45",
    },
    {
      name: "Physics",
      time: "10:00-10:45",
    },
    {
      name: "Numerical method",
      time: "10:00-10:45",
    },
  ]);
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(shedulearr);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    const startIndex = Math.min(result.source.index, result.destination.index);
    const endIndex = Math.max(result.source.index, result.destination.index);

    const updatedChapters = items.slice(startIndex, endIndex + 1);

    setshedulearr(items);
  };
  return (
    <>
      <h1 className="mb-4 text-2xl font-bold">Sunday</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="chapters">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className=" text-center w-[200]"
            >
              {shedulearr.map((shedule, index) => (
                <Draggable
                  key={shedule.name}
                  draggableId={shedule.name}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className={cn(
                        "flex justify-center items-center gap-x-2 bg-slate-200 flex-wrap border-slate-200 border text-center  rounded-md mb-4 text-sm "
                      )}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      <div
                        className={cn("text-center")}
                        {...provided.dragHandleProps}
                      >
                        <p className="text-center">{shedule.name}</p>
                        <span className="text-center">{shedule.time}</span>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default SheduleList;
