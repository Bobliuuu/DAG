curl --request POST \
     --url https://api.cohere.ai/v1/chat \
     --header 'accept: application/json' \
     --header 'authorization: Bearer redact' \
     --header 'content-type: application/json' \
     --data '
{
  "message": "Can you give me a global market overview of solar panels?",
  "temperature": 0.3,
  "stream": false,
  "chat_history": [
    {
      "user_name": "User",
      "message": "Hi!"
    },
    {
      "user_name": "Chatbot",
      "message": "How can I help you today?"
    }
  ],
  "prompt_truncation": "OFF"
}
'

Result: {
  "response_id": "ae1690f4-3ca4-460f-b007-3941bb5e0bc3",
  "text": "The global solar panel market was valued at $140.4 billion in 2020 and is expected to reach $353.2 billion by 2030, registering a CAGR of 11.1% from 2021 to 2030. Solar panel systems are the most cost-effective and accessible source of energy in many regions. They are also a clean and sustainable source of energy, which has led to an increase in demand for solar panels in recent years. The increase in demand for solar panels is expected to continue in the coming years, as more and more countries strive to reduce their carbon footprint and transition to renewable energy sources.\n\nThe solar panel market is highly competitive, with many companies vying for a share of the market. The top five companies in the market are JA Solar, Jinko Solar, Trina Solar, Canadian Solar, and Hanwha Q-Cells. These companies are expected to continue to dominate the market in the coming years, as they have a strong presence in the industry and a reputation for producing high-quality products.\n\nThe solar panel market is expected to grow at a CAGR of 11.1% from 2021 to 2030. The growth of the market is expected to be driven by the increasing demand for renewable energy sources, as more and more countries strive to reduce their carbon footprint and transition to sustainable energy sources. The market is also expected to benefit from the increasing number of government initiatives and policies that support the adoption of solar panels and other renewable energy sources.",
  "generation_id": "c212463a-8128-4cd6-9749-8deb0c8ffe9c",
  "token_count": {
    "prompt_tokens": 90,
    "response_tokens": 289,
    "total_tokens": 379,
    "billed_tokens": 367
  },
  "meta": {
    "api_version": {
      "version": "1"
    }
  },
  "search_queries": []
}