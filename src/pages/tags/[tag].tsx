import PostList from '@/components/PostList';
import { createClient } from '@/utils/supabase/client';
import { GetServerSideProps } from 'next';

type TagPostsrops = {
  tag: string;
};

const supabase = createClient();

export default function TagPosts({ tag }: TagPostsrops) {
  return <PostList tag={tag} />;
}

export const getServerSideProps: GetServerSideProps<TagPostsrops> = async ({
  query,
}) => {
  return {
    props: {
      tag: query.tag as string,
    },
  };
};
