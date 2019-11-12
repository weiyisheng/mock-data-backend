

import Mock from 'mockjs'

import sequelize from './backend/sequelize'


export async function mockRouter(req, res, next) {
    
    const path = req.path
    const mock = await sequelize.models['Mock'].findOne({
        where: {path: path}
    })
    if(mock) {
        const mockData = Mock.mock(JSON.parse(mock.template))
        res.send(mockData)
    } else {
        next()
    }
  }