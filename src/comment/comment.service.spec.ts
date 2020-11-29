import { Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { createSpyObj } from 'jest-createspyobj';

import { PrismaService } from '../prisma/prisma.service';
import { CommentService } from './comment.service';

describe('CommentService', () => {
    let service: CommentService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommentService,
                PrismaService,
                {
                    provide: Logger,
                    useValue: createSpyObj(Logger),
                },
            ],
        }).compile();

        service = module.get<CommentService>(CommentService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
