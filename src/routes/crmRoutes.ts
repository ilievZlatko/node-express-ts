import { Request, Response } from 'express'

export class Routes {
  public routes(app): void {
    app.get('/', (req: Request, res: Response) => {
      res.status(200).json({
        message: 'Get request successful!!!'
      })
    })
  }
}
