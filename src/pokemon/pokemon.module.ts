import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [
    MongooseModule.forFeature([
      {  // Importamos de entities la clase pokemon que esta extendida a document por mongoose
        name: Pokemon.name,
        schema: PokemonSchema,
      }
    ])
  ]
})
export class PokemonModule {}
