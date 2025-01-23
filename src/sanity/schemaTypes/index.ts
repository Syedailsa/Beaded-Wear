import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import category from './category'
import contactForm from './contactForm'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category,contactForm],
}
