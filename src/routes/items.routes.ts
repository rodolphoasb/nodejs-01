import { Router } from 'express'
import { connection as knex } from '../database/connection'

export const itemsRouter = Router()

itemsRouter.get('/', async (request, response) => {
  const items = await knex('items').select('*')

  const serializedItems = items.map(item => {
    return {
      id: item.id,
      title: item.title,
      imageUrl: `http://localhost:3333/uploads/${item.image}`
    }
  })

  return response.json(serializedItems)
})
