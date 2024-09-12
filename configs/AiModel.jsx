import React from "react";

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const GenerateCourseLayout_AI = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "generate a course tutorial on following detail with field as course name, description, along with chapter name, about, duration: category: 'programming', topic: python, level:basic, duration:1 hours, noOfChapters:5, in JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "course": {\n    "name": "Python for Beginners",\n    "description": "This course is designed to introduce you to the fundamentals of Python programming. You\'ll learn the basics of syntax, data types, variables, operators, control flow, and functions. By the end of this course, you\'ll be able to write simple Python programs and understand the core concepts of the language.",\n    "category": "programming",\n    "topic": "python",\n    "level": "basic",\n    "duration": "1 hour",\n    "chapters": [\n      {\n        "name": "Introduction to Python",\n        "about": "This chapter will introduce you to the Python programming language, its history, and its applications. You\'ll learn how to install Python and set up your development environment.",\n        "duration": "15 minutes"\n      },\n      {\n        "name": "Basic Syntax and Data Types",\n        "about": "This chapter will cover the basic syntax of Python, including variables, data types, operators, and expressions.",\n        "duration": "20 minutes"\n      },\n      {\n        "name": "Control Flow Statements",\n        "about": "This chapter will introduce you to control flow statements such as if-else, loops, and functions.",\n        "duration": "25 minutes"\n      },\n      {\n        "name": "Data Structures",\n        "about": "This chapter will cover fundamental data structures in Python, including lists, tuples, dictionaries, and sets.",\n        "duration": "15 minutes"\n      },\n      {\n        "name": "Practice and Projects",\n        "about": "This chapter will provide you with practice exercises and small projects to solidify your understanding of Python concepts.",\n        "duration": "15 minutes"\n      }\n    ]\n  }\n}\n```',
        },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
