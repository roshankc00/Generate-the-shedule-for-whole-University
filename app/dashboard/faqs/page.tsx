import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqPage = () => {
  return (
    <div className="px-[20%] mt-10">
      <h1 className=" mb-3 text-2xl font-bold text-center">
        FREQUENTLY ASKED QUESTION
      </h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it Relaible to use?</AccordionTrigger>
          <AccordionContent>
            Yes of course you can try with your inputs
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Can it generate shedule based on subject portion of each teacher for
            each subject ?
          </AccordionTrigger>
          <AccordionContent>
            Yes of course it will generate based on credit hrs
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            How many consesccutive periods will it generate for a teacher for a
            class
          </AccordionTrigger>
          <AccordionContent>
            It will generate atmax 2 but it can be adjusted manually
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            In Which case will it be unable to generate the Shedule ?
          </AccordionTrigger>
          <AccordionContent>
            It will not generate the shedule if an only if it is impossible all
            the constraints. In other words the solution doesnt exist
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default FaqPage;
