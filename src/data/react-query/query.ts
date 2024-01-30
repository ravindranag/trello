import { useQuery } from "@tanstack/react-query";
import { boardDetails } from "../boards";
import { swimlaneDetails } from "../swimlanes";
import { cardDetails } from "../cards";

export const useBoardDetailQuery = (id: string) => useQuery({
  queryKey: ['board', 'detail', id],
  queryFn: async () => {
    return {
      data: boardDetails[id]
    }
  },
}) 


export const useSwimlaneDetailQuery = (id: string) => useQuery({
	queryKey: ['swimlane', 'detail', id],
	queryFn: async () => {
		return {
			data: swimlaneDetails[id]
		}
	}
})


export const useCardDetailQuery = (id: string) => useQuery({
	queryKey: ['card', 'detail', id],
	queryFn: async () => {
		return {
			data: cardDetails[id]
		}
	}
})