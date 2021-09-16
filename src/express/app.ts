import express from 'express'
import graphql from '@issue/express/graphql'

export const app = express().use(graphql)
