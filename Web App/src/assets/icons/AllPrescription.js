import React from "react";
import { SvgIcon } from "@material-ui/core";

const Symbol = (props) => {
  return (
    <SvgIcon
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="512"
      height="512"
      x="0"
      y="0"
      viewBox="0 0 511 511.998"
    >
      <g>
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="m466.140625 349.445312c.1875-.226562.378906-.445312.5625-.671874.527344-.65625 1.039063-1.324219 1.542969-1.996094.085937-.113282.175781-.226563.261718-.34375 8.585938-11.613282 13.246094-25.621094 13.246094-40.28125v-264.890625c0-22.753907-18.507812-41.261719-41.257812-41.261719h-241.339844c-22.75 0-41.261719 18.507812-41.261719 41.261719v94.054687c-11.382812-.667968-22.941406 1.28125-33.484375 5.761719-14.867187 6.320313-27 17.070313-35.09375 31.09375l-39.460937 68.335937-39.460938 68.34375c-3.824219 6.625-6.503906 13.601563-8.101562 20.703126-.535157 2.363281-.945313 4.746093-1.238281 7.128906-.148438 1.191406-.265626 2.386718-.355469 3.582031-.175781 2.386719-.234375 4.773437-.179688 7.15625.027344 1.304687.101563 2.601563.199219 3.902344.527344 6.949219 2.023438 13.792969 4.441406 20.3125.710938 1.914062 1.511719 3.792969 2.378906 5.644531.160157.339844.304688.6875.46875 1.027344 6.238282 12.824218 16.230469 23.988281 29.480469 31.640625.378907.21875.757813.421875 1.140625.632812.332032.183594.664063.375 1 .554688.265625.140625.535156.273437.800782.414062.464843.238281.925781.480469 1.394531.710938.167969.082031.335937.15625.503906.238281.574219.277344 1.152344.554688 1.734375.816406.042969.019532.085938.035156.128906.054688 9.496094 4.265625 19.816406 6.496094 30.234375 6.496094 10.796875 0 21.386719-2.367188 31.054688-6.816407.074219-.035156.148437-.066406.226562-.101562.070313-.03125.140625-.058594.210938-.09375 2.242187 25.25 13.109375 48.722656 31.175781 66.925781 20.375 20.527344 47.515625 31.964844 76.429688 32.207031h.085937.003906.132813c.230468.003907.457031.007813.683594.007813 49.886718 0 92.046874-33.699219 104.917968-79.527344h38.007813c9.726562 0 19.296875-2.152344 28.046875-6.121094.246094-.09375.492187-.183594.730468-.292968 1.292969-.605469 2.550782-1.261719 3.796876-1.941407.007812-.003906.011718-.007812.019531-.011719.964843-.527343 1.914062-1.078124 2.847656-1.648437.054687-.03125.105469-.066406.160156-.097656.882813-.542969 1.753907-1.109375 2.613281-1.691407.089844-.0625.179688-.125.269532-.183593.808594-.558594 1.605468-1.128907 2.390625-1.71875.128906-.097657.257812-.195313.386719-.292969.730468-.558594 1.445312-1.132812 2.152343-1.722656.167969-.136719.335938-.269532.5-.410156.667969-.5625 1.316407-1.148438 1.964844-1.738282.179687-.167968.367187-.328125.546875-.496094.769531-.722656 1.527344-1.460937 2.265625-2.222656.027344-.03125.058594-.058594.085937-.089844l56.542969-58.449218c.464844-.480469.902344-.976563 1.351563-1.46875.234375-.257813.476562-.507813.710937-.765625.476563-.542969.9375-1.101563 1.402344-1.660157zm-359.503906-167.277343c9.738281-16.871094 27.988281-26.996094 46.976562-26.996094 3.992188 0 8.023438.449219 12.011719 1.378906 5.175781 1.207031 10.148438 3.175781 14.777344 5.847657 16.664062 9.625 27.011718 27.574218 27.011718 46.84375 0 9.417968-2.5 18.734374-7.238281 26.9375l-34.457031 59.679687-93.542969-54.007813zm-2.410157 208.773437c-.445312.289063-.890624.582032-1.34375.859375-.191406.121094-.390624.230469-.585937.347657-.386719.234374-.777344.464843-1.171875.691406-.238281.132812-.480469.261718-.71875.394531-.351562.191406-.703125.382813-1.058594.566406-.28125.144531-.566406.285157-.851562.425781-.308594.15625-.621094.304688-.933594.453126-.332031.15625-.664062.308593-1 .457031-.261719.117187-.519531.230469-.78125.34375-.390625.167969-.78125.328125-1.175781.484375-.191407.078125-.386719.152344-.578125.230468-.464844.175782-.929688.351563-1.398438.519532-.097656.035156-.195312.066406-.292968.101562-11.507813 4.007813-24.183594 4.0625-35.835938-.042968-.015625-.003907-.035156-.011719-.050781-.015626-.554688-.195312-1.105469-.402343-1.652344-.617187-.109375-.042969-.21875-.085937-.324219-.128906-.460937-.183594-.917968-.375-1.375-.570313-.15625-.070312-.3125-.136718-.46875-.207031-.417968-.179687-.828125-.375-1.238281-.566406-.175781-.082031-.351563-.164063-.523437-.25-.410157-.199219-.820313-.40625-1.222657-.617188-.164062-.082031-.328125-.164062-.492187-.25-.558594-.296875-1.113282-.605469-1.664063-.921875-25.789062-14.894531-34.65625-47.992187-19.773437-73.78125l34.460937-59.679687 91.96875 53.101562c-.332031.222657-.65625.453125-.988281.679688-.386719.261719-.777344.527343-1.160156.792969-.152344.105468-.300782.207031-.449219.316406-.277344.195312-.550781.398437-.824219.59375-.015625.011718-.027344.023437-.042968.03125-.382813.277344-.765626.550781-1.140626.832031-.175781.128906-.351562.261719-.527343.394531-.300781.226563-.597657.457032-.898438.6875-.324219.25-.652343.496094-.976562.75-.203125.160156-.402344.320313-.601563.480469-.316406.25-.625.5-.933594.753906-.269531.222657-.542968.4375-.8125.660157-.226562.1875-.449218.382812-.671874.570312-.320313.273438-.640626.546875-.960938.820312-.214844.1875-.4375.375-.652344.5625-.25.21875-.496094.449219-.742187.671876-.328125.292968-.65625.585937-.980469.882812-.167969.152344-.335938.304688-.503906.457031-.273438.253907-.539063.515625-.808594.773438-.335938.316406-.667969.632812-.996094.949219-.429687.421874-.855468.84375-1.277344 1.269531-.316406.320312-.632812.636719-.949218.957031-.058594.0625-.121094.125-.183594.1875-.367188.382812-.726562.773438-1.089844 1.160156-.285156.304688-.578125.605469-.859375.910156-.027343.03125-.058593.066407-.085937.097657-.386719.421875-.761719.851562-1.140625 1.277343-.25.28125-.503907.558594-.75.839844-.058594.070313-.117188.136719-.175781.207032-.339844.394531-.671876.796874-1.007813 1.195312-.265625.316406-.53125.628906-.792969.945312-.21875.269532-.433594.539063-.652344.808594-.144531.179688-.28125.359375-.425781.535156-.261719.335938-.53125.667969-.792969 1.003907-.085937.113281-.179687.226562-.265624.339843-.269532.351563-.53125.707032-.792969 1.0625-.242188.320313-.484375.640626-.722657.964844-.117187.164063-.238281.324219-.355468.484375-.25.347657-.496094.703125-.742188 1.050781-.207031.292969-.417968.585938-.621094.882813-.144531.207031-.289062.414063-.429687.621094-.234375.347656-.464844.695312-.695313 1.042969-.175781.265624-.351562.53125-.523437.792968-.167969.257813-.335937.511719-.5.769532-.21875.339843-.433594.683593-.648437 1.027343-.148438.238281-.292969.472657-.4375.707031-.1875.304688-.371094.609376-.554688.914063-.203125.335937-.40625.675781-.605469 1.015625-.117187.203125-.234375.410156-.355469.617188-.203124.351562-.402343.703124-.601562 1.054687-.1875.335937-.375.667969-.558594 1.003906-.050781.089844-.097656.183594-.148437.277344-.054688.097656-.109375.199219-.160157.300781-.207031.382813-.414062.765625-.617187 1.148438-.285156.542968-.5625 1.089844-.839844 1.636718-.191406.375-.375.75-.558593 1.125-.277344.566407-.550782 1.132813-.816407 1.703126-.171875.363281-.335937.726562-.503906 1.089843-.019531.042969-.039063.085938-.058594.128907-.074219.167968-.152343.332031-.230469.5-.167968.382812-.335937.761718-.5 1.144531-.140624.324219-.277343.648437-.414062.972656-.097656.230469-.195312.460937-.289062.691406-.171876.410157-.339844.824219-.507813 1.238281-.109375.273438-.210937.546876-.320313.820313-.097656.257813-.199218.511719-.296874.769531-.171876.449219-.339844.894532-.507813 1.34375-.078125.222656-.15625.445313-.238281.667969-.097656.28125-.199219.566406-.296875.847656-.167969.480469-.339844.964844-.503907 1.449219-.054687.171875-.109374.347656-.164062.519531-.097656.296875-.195312.601563-.289062.902344-.214844.667969-.425782 1.335937-.625 2.011719-.082032.28125-.164063.566406-.246094.851562-.199219.699219-.398438 1.394532-.585938 2.097656-.058594.222657-.113281.449219-.171875.675782-.363281 1.390625-.699219 2.792968-1.003906 4.203125-.046875.21875-.101563.433593-.148437.652343-.140626.675782-.269532 1.359376-.398438 2.039063-.070312.351563-.140625.699219-.203125 1.050781-.011719.050782-.019531.101563-.03125.15625-.101563.574219-.195313 1.152344-.289063 1.730469-.058593.363281-.121093.722656-.175781 1.085937-.015625.097657-.03125.203126-.042969.300782-.082031.539062-.152343 1.082031-.226562 1.621094-.015625.132812-.035156.265624-.054688.398437-.027343.222656-.0625.441406-.089843.660156-.5625.410157-1.132813.808594-1.707031 1.195313-.128907.089844-.261719.171875-.390626.257812zm21.25 12.097656c0-2.496093.105469-4.996093.324219-7.484374.074219-.902344.160157-1.796876.265625-2.691407.191406-1.691406.433594-3.371093.722656-5.035156.015626-.097656.027344-.195313.046876-.292969.113281-.644531.238281-1.285156.367187-1.925781.046875-.238281.089844-.476563.136719-.710937.117187-.566407.25-1.128907.378906-1.691407.070312-.308593.132812-.617187.207031-.921875.117188-.5.25-.988281.375-1.484375.097657-.367187.183594-.738281.285157-1.105469.121093-.453124.257812-.902343.390624-1.355468.113282-.402344.226563-.808594.347657-1.207032.128906-.421874.265625-.835937.402343-1.25.136719-.429687.265626-.863281.410157-1.289062.136719-.394531.28125-.789062.421875-1.183594.152344-.4375.304687-.882812.464844-1.320312.144531-.382813.296874-.757813.441406-1.140625.175781-.445313.34375-.890625.519531-1.335938.148437-.363281.308594-.722656.460937-1.082031.191407-.453125.375-.910156.574219-1.355469.152344-.347656.316407-.691406.472657-1.035156.210937-.460937.417968-.921875.632812-1.375.160156-.328125.324219-.652344.484375-.980469.230469-.464844.457031-.933594.691406-1.394531.164063-.320313.339844-.632813.507813-.949219.246094-.464844.488281-.925781.738281-1.386718.171875-.308594.351563-.613282.527344-.917969.261719-.460938.519531-.921875.789062-1.378907.179688-.304687.367188-.601562.550781-.902343.273438-.453125.546876-.90625.828126-1.355469.191406-.296875.386718-.589844.582031-.886719.285156-.441406.570312-.886719.867187-1.328125.199219-.292968.402344-.578125.605469-.867187.300781-.4375.597656-.871094.90625-1.304688.207031-.285156.421875-.566406.632813-.851562.3125-.425781.625-.855469.945312-1.273438.21875-.285156.441406-.558593.664062-.839843.324219-.414063.644532-.832032.976563-1.242188.234375-.28125.472656-.558594.707031-.839844.332032-.398437.660156-.796875 1-1.191406.242188-.28125.492188-.554688.738282-.832031.339843-.386719.679687-.769531 1.027343-1.148438.25-.277343.511719-.542969.765625-.816406.355469-.375.703125-.75 1.0625-1.117187.261719-.269532.53125-.53125.796875-.796876.359375-.363281.71875-.726562 1.089844-1.082031.273437-.265625.554687-.523437.832031-.785156.371094-.347656.734375-.699219 1.109375-1.039063.289063-.261718.582031-.515624.871094-.773437.378906-.332031.75-.667969 1.132813-.996094.300781-.261719.609374-.511719.917968-.765625.378906-.316406.753906-.636718 1.140625-.949218.3125-.25.636719-.496094.953125-.746094.386719-.300782.769532-.609375 1.164063-.90625.324219-.246094.65625-.484375.984375-.726563.394531-.289062.785156-.582031 1.183594-.867187.335937-.238282.679687-.46875 1.019531-.703125.402343-.277344.800781-.558594 1.207031-.832031.347656-.230469.703125-.457032 1.058594-.683594.402344-.261719.804687-.527344 1.214844-.78125.363281-.226563.734374-.445313 1.101562-.667969.402344-.242187.800781-.492187 1.210938-.726563.046874-.027343.097656-.054687.144531-.082031 1.140625-.664062 2.300781-1.289062 3.472656-1.898437.300781-.15625.605469-.3125.90625-.464844 1.183594-.597656 2.375-1.179688 3.582031-1.726562.011719-.003907.023438-.011719.035156-.015626 8.15625-3.675781 16.851563-6.105468 25.753907-7.191406v176.582032c-43.914063-5.386719-78.128907-43.0625-78.128907-88.296876zm98.128907 88.492188v-176.972656c.023437 0 .046875.003906.070312.007812 1.320313.136719 2.632813.304688 3.933594.496094.074219.011719.148437.023438.222656.03125 1.261719.191406 2.511719.414062 3.757813.660156.144531.027344.289062.054688.4375.082032 1.199218.242187 2.382812.511718 3.5625.800781.183594.042969.367187.085937.550781.132812 1.152344.289063 2.296875.605469 3.433594.941407.195312.058593.394531.117187.59375.175781 1.121093.339843 2.238281.703125 3.339843 1.085937.195313.066406.390626.136719.585938.207032 1.105469.390624 2.203125.800781 3.289062 1.238281.175782.070312.347657.140625.523438.210937 1.105469.449219 2.199219.917969 3.28125 1.410156.132812.0625.261719.125.394531.1875 1.121094.515626 2.230469 1.050782 3.324219 1.613282.058594.03125.121094.0625.183594.097656 1.074218.550781 2.132812 1.128906 3.179687 1.726562.105469.058594.210938.113282.3125.175782 1.035157.589844 2.050781 1.207031 3.058594 1.839844.152344.097656.308594.191406.460937.289062.96875.617188 1.925782 1.257812 2.871094 1.914062.175782.121094.351563.242188.527344.363282.925781.652344 1.835938 1.324218 2.738281 2.007812.175781.136719.355469.273438.535157.410156.890624.691407 1.769531 1.398438 2.632812 2.117188.167969.144531.339844.289062.507812.429688.867188.738281 1.71875 1.488281 2.558594 2.253906.144532.132812.289063.269531.433594.40625.851562.789062 1.695312 1.597656 2.515625 2.421875.105469.105469.210937.21875.316406.324219.847657.859374 1.683594 1.734374 2.5 2.628906.046875.054687.09375.105468.140625.160156.800782.882812 1.582032 1.785156 2.347656 2.703125.082032.097656.164063.195313.246094.292969.753906.910156 1.484375 1.835937 2.203125 2.777344.109375.144531.222657.285156.332031.429687.691407.921875 1.363282 1.855469 2.023438 2.800781.117188.175782.238281.34375.355469.515625.644531.941407 1.269531 1.894531 1.875 2.859375.117187.183594.230469.367188.347656.554688.597656.96875 1.183594 1.949218 1.746094 2.945312.105469.183594.207031.367188.308593.550782.566407 1.011718 1.113282 2.035156 1.636719 3.070312.082031.160156.160157.320312.242188.480469.535156 1.070312 1.050781 2.148437 1.542969 3.242187.054687.117188.105468.234375.15625.351563.507812 1.144531 1 2.304687 1.464843 3.476562.011719.027344.019531.054688.03125.082031.460938 1.167969.894531 2.351563 1.304688 3.542969.035156.105469.074219.207031.109375.3125.394531 1.160157.761718 2.332031 1.113281 3.511719.046875.15625.09375.3125.140625.472656.332031 1.152344.640625 2.316406.925781 3.488282.046875.1875.09375.371093.136719.5625.277344 1.160156.53125 2.328124.761719 3.507812.039062.199219.078125.394531.113281.59375.222656 1.183594.421875 2.371094.597656 3.570312.027344.1875.054688.378907.082032.570313.167968 1.21875.316406 2.441406.4375 3.671875.015624.164062.027343.328125.042968.492188.117188 1.269531.210938 2.542968.273438 3.828124.003906.105469.007812.210938.011718.316407.0625 1.34375.097657 2.699219.097657 4.0625 0 1.453125-.035157 2.90625-.109375 4.355469-.011719.304687-.046875.605468-.0625.90625-.066406 1.140624-.140625 2.28125-.253906 3.417968-.046876.472656-.113282.941406-.167969 1.414063-.105469.941406-.210938 1.886719-.347657 2.824219-.097656.667968-.222656 1.324218-.335937 1.988281-.121094.722656-.234375 1.445312-.375 2.164062-7.410156 37.980469-39.058594 67.394531-78.128906 71.417969zm99.375-79.0625c.007812-.082031.007812-.164062.015625-.25.117187-1.394531.207031-2.800781.273437-4.210938.007813-.214843.015625-.429687.023438-.644531.054687-1.433593.09375-2.875.09375-4.320312 0-10.179688-1.40625-20.035157-4.03125-29.386719h18.023437c5.523438 0 10-4.476562 10-10 0-5.519531-4.476562-10-10-10h-25.84375c-18.039062-35.324219-54.792968-59.570312-97.105468-59.570312-.214844 0-.429688.003906-.644532.007812l-.195312.003906h-.070313c-1.144531.007813-2.289062.039063-3.433593.085938-.246094.007812-.492188.027344-.734376.039062-.863281.039063-1.722656.085938-2.582031.144532-.492187.035156-.980469.082031-1.472656.121093-.605469.050781-1.210937.101563-1.8125.164063-.605469.058594-1.210937.132812-1.816406.203125-.480469.058593-.964844.113281-1.449219.175781-.671875.089844-1.339844.1875-2.011719.289062-.410156.0625-.820312.121094-1.230469.191407-.710937.113281-1.425781.238281-2.136718.367187-.363282.066406-.722656.132813-1.085938.203125-.738281.144531-1.476562.292969-2.214844.453125-.332031.070313-.664062.144532-.996093.21875-.75.167969-1.503907.34375-2.25.527344-.117188.027344-.230469.050781-.34375.082031l29.542969-51.183593c6.492187-11.238282 9.921874-24.011719 9.921874-36.9375 0-26.390626-14.179687-50.972657-37.007812-64.160157-.910156-.523437-1.835938-1.023437-2.761719-1.511719-.292969-.152343-.589843-.296874-.882812-.445312-.65625-.332031-1.3125-.652344-1.976563-.964844-.332031-.15625-.660156-.308594-.996094-.460937-.679687-.304688-1.363281-.601563-2.054687-.886719-.285156-.117188-.570313-.242188-.859375-.359375-.96875-.386719-1.941406-.757813-2.925781-1.105469-.015625-.003906-.035157-.011718-.054688-.019531v-98.066406c0-11.726563 9.539063-21.261719 21.261719-21.261719h241.339844c11.722656 0 21.257812 9.535156 21.257812 21.261719v264.886719c0 4.597656-.652344 9.105468-1.902344 13.410156h-51.851562c-19.910156 0-36.109375 16.199218-36.109375 36.113281v54.511719c-4.671875 1.492187-9.574219 2.285156-14.535156 2.285156zm68.910156-14.71875v-42.078125c0-8.886719 7.226563-16.113281 16.109375-16.113281h40.171875l-51.707031 53.460937zm0 0"
          fill="#ffffff"
          data-original="#000000"
          
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="m240.0625 109.417969h158.847656c5.523438 0 10-4.476563 10-10 0-5.523438-4.476562-10-10-10h-158.847656c-5.523438 0-10 4.476562-10 10 0 5.523437 4.476562 10 10 10zm0 0"
          fill="#ffffff"
          data-original="#000000"
          
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="m401.332031 177.496094h-.023437c-5.523438 0-9.988282 4.480468-9.988282 10 0 5.523437 4.488282 10 10.011719 10 5.523438 0 10-4.476563 10-10 0-5.519532-4.476562-10-10-10zm0 0"
          fill="#ffffff"
          data-original="#000000"
          
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="m368.828125 187.496094c0-5.519532-4.476563-10-10-10h-118.765625c-5.523438 0-10 4.480468-10 10 0 5.523437 4.476562 10 10 10h118.765625c5.523437 0 10-4.476563 10-10zm0 0"
          fill="#ffffff"
          data-original="#000000"
          
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="m408.910156 275.578125c0-5.523437-4.476562-10-10-10h-110.191406c-5.519531 0-10 4.476563-10 10 0 5.519531 4.480469 10 10 10h110.191406c5.523438 0 10-4.476563 10-10zm0 0"
          fill="#ffffff"
          data-original="#000000"
          
        />
      </g>
    </SvgIcon>
  );
};

export default Symbol;
