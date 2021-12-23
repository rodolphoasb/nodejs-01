import { Router } from 'express'
import { itemsRouter } from './items.routes'

export const routes = Router()

routes.use('/items', itemsRouter)
