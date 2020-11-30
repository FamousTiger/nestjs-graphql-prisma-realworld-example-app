import { InputType, Field } from '@nestjs/graphql';
import { ArticleUpdateOneWithoutCommentsInput } from '../article/article-update-one-without-comments.input';

@InputType()
export class CommentUpdateWithoutAuthorInput {
    @Field(() => String, {
        nullable: true,
    })
    commentId?: string;

    @Field(() => String, {
        nullable: true,
    })
    createdAt?: Date | string;

    @Field(() => String, {
        nullable: true,
    })
    updatedAt?: Date | string;

    @Field(() => String, {
        nullable: true,
    })
    body?: string;

    @Field(() => ArticleUpdateOneWithoutCommentsInput, {
        nullable: true,
    })
    article?: ArticleUpdateOneWithoutCommentsInput;
}
