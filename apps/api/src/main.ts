import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

const port = process.env.PORT || 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: [
      'https://park-ease-web-manager.vercel.app',
      'https://park-ease-web-admin.vercel.app',
      'https://park-ease-web-valet.vercel.app',
      'https://park-ease-web.vercel.app',
      'https://studio.apollographql.com',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
  const config = new DocumentBuilder()
    .setTitle('ParkEase | Nischay')
    .setDescription(
      `The ParkEase API.
      <h2>Looking for the graphql api?</h2>
      Go to <a href="/graphql" target="_blank">/graphql</a>.
      Or,
      You might also need to use the <a target="_blank" href="https://studio.apollographql.com/sandbox/explorer?endpoint=https://parkease-hfgf.onrender.com/graphql&document=query users{users{ uid }}">
      Apollo explorer</a> for a greater experience.`,
    )
    .setVersion('0.1')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/', app, document)
  await app.listen(port, '0.0.0.0')
}
bootstrap()
