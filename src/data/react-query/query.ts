import { useQuery } from "@tanstack/react-query";
import { data } from "../data";

export const useBoardDetailQuery = (title: string) => useQuery({
  queryKey: ['board', 'detail'],
  queryFn: async () => {
    return {
      data: data.boards.find(board => board.title === title)
    }
  }
}) 
