import { defineField,defineType } from "sanity"
export const product=defineType(
    {

        name:"product",
        type:"document",
        title:"Product",
        fields:[
            defineField({
                name:"name",
                 type:"string",
                 title:"product name",
            }),
            defineField({
                name:"price",
                 type:"number",
                 title:"product price",
            }),                                     
            defineField({
                name:"Type",       
                 type:"string",
                 title:"product Type",
            }),
          
      
            defineField({
                name: "image",
                title: "Product Image",
                type: "array",
                of: [defineField(
                  {
                    name:"image",
                    type: "image",
                    title:"Product Image"
                  })
                ]
              }),
              defineField({
                name:"category",
                 type:"reference",
                 title:"product category",
                 to:[{
                         type:"category"
                 }]
            }),
           
        
           
        ]     
    }
)           