import avro from "avsc";

export default avro.Type.forSchema({
  type: "record",
  fields: [
    {
      name: "category",
      type: { type: "enum", symbols: ["KTern", "KEBS"] },
    },
    {
      name: "noise",
      type: "string",
    },
  ],
});
