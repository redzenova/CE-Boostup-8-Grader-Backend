import { Submission } from "../types.ts";

// @desc    Add submission
// @route   Post /api/v1/submit
const addSubmission = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();

  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      msg: "No data.",
    };
  } else {
      // send code to server
      // then add to submission
  }
};

export { addSubmission };
