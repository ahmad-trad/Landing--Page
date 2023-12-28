const Earth = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h10v10H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.02)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFM0lEQVR4nO2a2W9VVRTGf61BRaW0Di++iLTw5IDDg1ERp2g0mjhQVBK1ElBwqmjC4JM4NTxo9B+oGJ8cMCZiEHGWiAoiDikyqC8OlRrEgoJYe8xKvk1WNueec+695xZq+JKT9J717XXOOntYa3+7cBiFMV7XqEE7MAdYBnwK7ACS6Nohm3Fmq80hgTZgPvBFyksXvTYAD8jXiOMEYCkw6F7I/h5yv18ELnS/pwIvud9DUfs/gJ6RCqgJmAUMuBd4E7gZWKzffwG3uTaBF3A7sEf3rM0twCrH2w506VkNwfHAa+6BHwIXyHYx8A8wDEyP2sWBGDrFtTbTdM967yPHf7URvTMZ+N4NIfuqAWOATbI9ktI2LRDDo7q/ST4CrDd2ybYN6CgriLOAX+V4fYrjB2X7FjiyikCMu1k28+ExCfhcNnv2lDJ6IgTxLnBcZB+rMW32qyr4qBSI4Wo3L8yXxzjgfRdMzT3T5oZTH3BMCudO2b/M8JMVCGqbKK/EONYN261AK1WiKZrYYejcEzn7RLZ5dQQyT/a17t543Q9DL1zLq13NZrmJvRD4zjnbp+VyseO01BFIi5vcC4A3gL2unfXEQy7n+IUmN9kNRF/6CC2rqxSI/0q7df9ZYC5wJXAuMFG9F3ituneOOHcBTwMrXSCJS5artUzbs9FoCPOl0LK8VA0+AJor5JMuN8nLvAZUr52Y8txml2esAshEm+vCkOzSYON0p3jnAddoWPTqS67XQvG7e8mdumfL6tsqHBcB1wHnO05TxnOnunIms1dCTliTE/Ak8X4kH3lzJOBn8fIq4o/F684ihSr2hhxnneK9XmIgK8SbXvDZ1uupaBfhT+DoHGc94i4pMZDHxHsihzdWhalxJ6QR5shoXyYPy8WdUWIgVkEb7+UC3JXiWpo4AM/LeF8BR6F0uKTEQC51pVAeusV9Ls34mYxWkufhG3FPKzGQM8T7qgD38pRqYD/CHvvUKlaYk0sMxHwl8p2HMJ9/S0s2w8qofm9QCX/LUVrZXmsg5mtYvvPqqTF613/jpN3SgCw9Ute4/2UgzTUOraNKHFrmK1HlS61Da7RN9omVJjtSAIsuv1+Le3qJgZxZYLcZcJm4VncdgGWjMCH2phlny2g7tDy8Iu5Nh2KJ0u6KxljRiPGkuKZNHcyi8ZRKpA0i3FiwlF5RYiA2Eqop49dlkeaLZHVXFjrE+6nEQH4Rz1akLKwV7/4sUpu2kYm02CJbXdumXi9V5QVNVtug/eA4lba6tj2+VtvlwMkqTy5yvFyNq8eJ1Gniw0nau3hFvqxru4QNEzhiNGsLXmQe7e+VoJCYBIMkGdtEvROdgSSScmwVeUoBWol9thJrJTnoCslBz0hK2h353Ae8FclB98rWX43i2KVGgxLHtrqH7NUkX+ACqVegG1SJtEjnLaEESiQOLnTqzq1UgSadT8SS6dzopRslmbYCd+uZ/h2K5JjUIbbNidgmKFcSsTfWEcjGHBG7T/Yt9ZwOd7hjhffikrnBxwotrhTqL+MEeIocJUqYJs6liXqb6zjosfzlMdlpbP0qKEtBhxtmu7QYpB29LakikFCS9EV7oDucqL2lEWfxrU7PSrSmh6Q5zR2GdhYIZIY7DLUkF3TdNdHEbth/TDTpfCLMm0Tr/UzgYf3eE/VYHEhXdDw9U8J34PVXu8TWgzZVAKGcSfT3UPRF438YCOV/pX8YeLyW47WyAuqWoFxrWbJOPg5KAGmYoI1OrxJlWi02oMTXK27F/cShiJacEuYwcPgPknvUyL7T8dYAAAAASUVORK5CYII="
        id="b"
        width={50}
        height={50}
      />
    </defs>
  </svg>
)
export default Earth
