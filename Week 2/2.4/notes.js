// Bash is a command line interpreter language that lets you interact with your operating system.
// the prompts you give is interpreted/understood by command line interface/shell and is executed by kernel

// pwd : Print Working Directory

// ls : list files/directories
// ls -l : additional info like last modified date and time
// ls -R : details of sub directories also
// ls -t : acc to last modified
// ls -lr : to reverse the order (timestamp) of last modified
// ls -lt newdir : can even combine two cmnds
// ls -la : to see hidden files
// ls -lRa : just combined two cmnds
// ls -s newdir : lists dirs by size
// ls -lR | grep .json  : grep gives files with that extension
// ls *.js : wildcard(aestrick) also do it(grep) at a directory level
// ls Zoo*  : specific regex in the name of the file          //regex- a sequence of characters that specifies a match pattern in text
// ls ..  : suppose you're inside a subdir and want list files from parent dir

// cd : Change Directory
// cd ..   : to hop back one directory
// cd ../..   : for multiple dir's

// cat  : concatenate -> command to display the contents of a file
// cat > newFile.txt    //adding text to a file
   dfgdsfih
   zjdbwih
   xsdnw    //then press ctrl+D 
// cat >> newFile.txt   //to append more data

// touch  : create a New File 

// mkdir  : Make Directory
// mkdir test && cd test   :just using both commands together
// mkdir -p frontend/scripts    :recursively creating dir's and what this does is if parent dir doesn't it creates it without giving any error unlike simple mkdir

// mv script.js runtime_script.js     : to rename a file
// mv style.css zk-dapp/frontend/css/zk.css    :renaming file while moving it to another location

// cp : Copy files
// cp -r  :to copy folders

// rm : Delete files
// rm -r  : delete folders

// chmod : Change File Permissions -> Modify the read(r), write(w), and execute(x) permissions of a file
// chmod ugo-rwx    //for files  // user(u),group(g),others(o), +/- whether we're adding or removing a permission
// chmod -R ugo-rwx   //for folders