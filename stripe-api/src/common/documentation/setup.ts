import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const setupDocumentation = (app) => {
  const config = new DocumentBuilder()
    .setTitle('BRC API')
    .setDescription('Documentação API da BRC')
    .setVersion('1.0')
		.addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);
} 