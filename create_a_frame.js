// *************************
// *  Create a frame!      *
// *           __     __   *
// *          /  \~~~/  \  *
// *    ,----(     ..    ) *
// *   /      \__     __/  *
// *  /|         (\  |(    *
// * ^  \  /___\  /\ |     *
// *    |__|   |__|-..     *
// *************************

// Given an array of strings and a character to be used as border, output the frame with the content inside.

// Notes:

//     Always keep a space between the input string and the left and right borders.
//     The biggest string inside the array should always fit in the frame.
//     The input array is never empty.

// Example
// Shhh This would be really cool to use on a CLI project

// frame(['Create', 'a', 'frame'], '+')

// Output:

// ++++++++++
// + Create +
// + a      +
// + frame  +
// ++++++++++

const frame = (text, char) => {
    // Find longest element in array
    let longest = Math.max(...text.map(str => str.length))
    // At beginning and end of the array, insert our chosen character
    let hoo = `${char.repeat(longest + 4)}\n${char} `
    let ha = ` ${char}\n${char.repeat(longest + 4)}`
    // Insert spaces for each element in the array, so each element's length matches if the index is not the first or last
    let hooha = text.map((x) => {return x.length < longest ? x.concat(' '.repeat(longest - x.length)) : x}).join(` ${char}\n${char} `)
      
      
    return `${hoo}${hooha}${ha}`
    };