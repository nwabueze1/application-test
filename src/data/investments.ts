export const investments = [
  {
    title: "Invest your money in dollars",
    description: `By holding your investments in a stable currency, your money grows more over time and retains its value better.`,
    image: 1,
  },
  {
    title: "Choose what's best for you",
    description: `Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place. `,
    image: 2,
  },
  {
    title: "Set goals and reach them",
    description: "You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them.",
    image: 3,
  },
  {
    title: "We remember so you dont have to",
    description: "Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule. ",
    image: 4,
  },
].map((c, index) => ({ ...c, reverse: index % 2 !== 0 }));