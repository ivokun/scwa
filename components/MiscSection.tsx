import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MiscSection() {
  return (
    <section>
      <Accordion type="multiple">
        <AccordionItem value="hourly-forcast">
          <AccordionTrigger>Hourly Forecast</AccordionTrigger>
          <AccordionContent>
            Hourly forecast content goes heere
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="detail">
          <AccordionTrigger>Detail</AccordionTrigger>
          <AccordionContent>Detail content goes here</AccordionContent>
        </AccordionItem>
        <AccordionItem value="Advice">
          <AccordionTrigger>Advice</AccordionTrigger>
          <AccordionContent>Advice content goes here</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
