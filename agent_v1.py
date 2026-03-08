import anthropic
import os
import json

# Initialize Claude client
client = anthropic.Anthropic(
    api_key=os.environ["ANTHROPIC_API_KEY"]
)

SYSTEM_PROMPT = """
You are an AI agent helping build a classified portal 
for home interior designers in India.

Your responsibilities:
- Create structured designer listings.
- Output must be valid JSON.
- Include fields:
    name
    city
    budget_range
    style
    services
    description
Keep output clean and structured.
"""

def run_agent(goal):
    response = client.messages.create(
        model="claude-sonnet-4-0",
        max_tokens=800,
        system=SYSTEM_PROMPT,
        messages=[
            {"role": "user", "content": goal}
        ]
    )

    return response.content[0].text


if __name__ == "__main__":
    goal = input("Enter your goal: ")
    result = run_agent(goal)

    print("\n--- Agent Output ---\n")
    print(result)