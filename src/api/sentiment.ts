export interface Sentiment {
    sentiment: number;
}

export interface GetSentimentResponse {
    data: Sentiment;
}

const getRandomInt = () => Math.floor(Math.random() * Math.floor(10));

export const getSentiment = async (text: string): Promise<GetSentimentResponse> => {
    // TODO: This should hit an API and return a response
    // Simulating for now
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mockInt = getRandomInt();
            const mockResponse: GetSentimentResponse = {
                data: {
                    sentiment: mockInt,
                },
            };
            resolve(mockResponse);
        }, 1000);
    });
};
