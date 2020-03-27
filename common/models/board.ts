/**
 * @description 게시판 모델 (메타데이터만 포함)
 */
export default interface Board {
  // pk
  id: number;
  // 게시판 키 (alphanumeric, URL 접속에 사용)
  key: string;
  // 댓글 표시여부
  showComments: boolean;
  // 댓글에 평점 표시 여부
  showCommentRatings: boolean;
}