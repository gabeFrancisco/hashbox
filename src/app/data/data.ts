const data = [
  {
    title: "What is a hash?",
    text: "Hashing is the process of transforming any given key or a string of characters into another value. This is usually represented by a shorter, fixed-length value or key that represents and makes it easier to find or employ the original string. The most popular use for hashing is the implementation of hash tables. A hash table stores key and value pairs in a list that is accessible through its index. Because key and value pairs are unlimited, the hash function will map the keys to the table size. A hash value then becomes the index for a specific element.A hash function generates new values according to a mathematical hashing algorithm, known as a hash value or simply a hash. To prevent the conversion of hash back into the original key, a good hash always uses a one-way hashing algorithm. Hashing is relevant to -- but not limited to -- data indexing and retrieval, digital signatures, cybersecurity and cryptography.",
  },
  {
    title: "What is a GUID?",
    text: "GUID is an acronym for 'Globally Unique Identifier'.  A GUID is also sometimes called a UUID or 'Universally Unique Identifier. A GUID/UUID is a globally unique ID (string) that identifies a digital entity (person, place, or thing) that needs to be managed and kept available for a length of time. GUIDs are being assigned to research data, research publications, people, organizations, grants, laboratories, and a growing number of places and things.",
  },
  {
    title: "What is Base64?",
    text: 'Base64 is a scheme for converting binary data to printable ASCII characters, namely the upper- and lower-case Roman alphabet characters (A–Z, a–z), the numerals (0–9), and the "+" and "/" symbols, with the "=" symbol as a special suffix code. The data\'s original length must be a multiple of eight bits. To convert data to base64, the first byte is placed in the most significant eight bits of a 24-bit buffer, the next in the middle eight, and the third in the least significant eight bits. If there are fewer than three bytes to encode, the corresponding buffer bits will be zero. The buffer is then used, six bits at a time, most significant first, as indices into the string "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" and each character thus selected is output.',
  },
  {
    title: "What is Bcrypt?",
    text: "First created back in 1999, Bcrypt hashing is a way to boost the security of passwords. It combines the processes of hashing and salting passwords to ensure these credentials aren’t saved in plain text. Using the Blowfish cipher, Bcrypt is an algorithm that adds random strings of characters to passwords. That means Bcrypt hashing adds a level of unpredictability to passwords to make these credentials harder to guess. Another element of this process is speed. What makes Bcrpyt a preferred choice is that the algorithm doesn’t run too fast, helping to protect against a wide range of cyberattacks.",
  },
];

export default data;
