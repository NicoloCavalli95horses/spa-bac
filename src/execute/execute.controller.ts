import { Body, Controller, Post } from '@nestjs/common';
import { ExecuteService } from './execute.service';


@Controller('execute')
export class ExecuteController {
  constructor(private readonly executeService: ExecuteService) { }

  @Post()
  executeCall(@Body() body: any) {
    return this.executeService.execute(body);
  }
}
