import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { postLike, deleteLikes } from '@/api/service';

export const useToggleLike = () => {
  const queryClient = useQueryClient();

  const likeMutate = useMutation({
    mutationFn: () => {
      // if () {}
    },

    onSuccess: (res) => {
      console.log();
      queryClient.invalidateQueries({
        queryKey: [''],
      });
    },
    onError: (error) => {
      console.error('처리 중 에러가 발생했습니다.', error);
    },
  });

  const toggleLike = async (accommodationID: string, isLiked: boolean) => {
    if (isLiked) {
      // 이미 좋아요한 경우 삭제
      await unlikeMutation.mutateAsync(accommodationID);
    } else {
      // 좋아요 추가
      await likeMutate.mutateAsync(accommodationID);
    }
  };

  return {
    toggleLike,
    likeMutation,
    unlikeMutation,
  };
};
