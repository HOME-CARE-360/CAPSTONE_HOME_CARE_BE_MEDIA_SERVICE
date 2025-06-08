/* eslint-disable @typescript-eslint/no-unused-vars */
import { FileValidator } from '@nestjs/common';

import { Multer } from 'multer';
export class ImageMimeTypeValidator extends FileValidator<{ allowedMimeTypes: string[] }> {
    constructor(private readonly options: { allowedMimeTypes: string[] }) {
        super(options);
    }

    isValid(file?: Express.Multer.File): boolean {
        if (!file) return false;
        return this.options.allowedMimeTypes.includes(file.mimetype);
    }

    buildErrorMessage(): string {
        return `Only the following file types are allowed: ${this.options.allowedMimeTypes.join(', ')}`;
    }
}
