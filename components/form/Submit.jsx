export const Submit = ({ isPending }) => {
  return (
    <button
      type="submit"
      disabled={isPending}
      className="w-full bg-blue-600 text-white py-2 rounded-md mt-6 hover:bg-blue-700 transition disabled:cursor-not-allowed disabled:bg-blue-400"
    >
      Submit
    </button>
  );
};
