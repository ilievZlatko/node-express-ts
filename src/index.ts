import app from './app'

const PORT: string|number = process.env.PORT || 3000

app.listen(PORT, (): void => {
  console.log(`server started on ${PORT}`)
})