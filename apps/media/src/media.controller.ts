import { Controller, } from '@nestjs/common';
import { MediaService } from './media.service';


import { IsPublic } from 'libs/common/src/decorator/auth.decorator';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PresignedUploadFileBodyType } from 'libs/common/src/request-response-type/media/media.model';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) { }
  @IsPublic()
  @MessagePattern({ cmd: "images/upload/presigned-url" })
  async createPresignedUrl(@Payload() body: PresignedUploadFileBodyType) {
    return await this.mediaService.getPresignUrl(body)
  }
}
