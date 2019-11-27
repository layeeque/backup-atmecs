pragma solidity^0.4.2;
contract Examination {
    address public examiner;
    mapping (address => uint) public result;


    struct contributor {
        bytes32 userName;
        uint256[] taskList;
        bytes32[] taskStatus;
//         mapping(uint256 => bytes32) taskStatus;
        uint256 tokensCount;
    }
    
        mapping (address => contributor) contributorDetails;
        address[] public contributorList;
    
        /* Initializes contract with initial supply tokens to the creator of the contract */
    constructor() public {
        contributorDetails[msg.sender].userName = "mujtaba";
        contributorDetails[msg.sender].tokensCount = 5000;
    }


    function setContributor(address _address, bytes32 _userName) public {
        contributor storage instructor = contributorDetails[_address];
        instructor.userName = _userName;
        // instructor.taskList.push(0);
        instructor.tokensCount = 0;
        contributorList.push(_address);
        
    }

function getAllContributorUsernames() public view returns(bytes32[]) {
        bytes32[] memory temp = new bytes32[](contributorList.length);
        for(uint8 i=0; i < contributorList.length; i++){
             temp[i] = contributorDetails[contributorList[i]].userName;
        }
        return temp;
    }

function getContributorTaskList(address _contributorAdd) public view returns(uint256[]) {
        uint256[] memory temp = new uint256[](contributorDetails[_contributorAdd].taskList.length);
        
        for(uint8 i=0; i < contributorDetails[_contributorAdd].taskList.length; i++){
             temp[i] = contributorDetails[_contributorAdd].taskList[i];
        }
        return temp;
    }
    
    function getContributorTaskStatus(address _contributorAdd) public view returns(bytes32[]) {
        bytes32[] memory temp = new bytes32[](contributorDetails[_contributorAdd].taskStatus.length);
        
        for(uint8 i=0; i < contributorDetails[_contributorAdd].taskStatus.length; i++){
             temp[i] = contributorDetails[_contributorAdd].taskStatus[i];
        }
        return temp;
    }
    
    function setContributortaskStatus(address _address,uint _taskID,bytes32 _status) public 
    {
        contributorDetails[_address].taskStatus.push(_status);
        contributorDetails[_address].taskList.push(_taskID);
    }
    
    
    function updateContributortaskStatus(address _address,uint _taskID,bytes32 _status) public 
    {
      for (uint i =0 ; i< contributorDetails[_address].taskList.length;i++)
      {
         if(contributorDetails[_address].taskList[i] == _taskID)
         {
            contributorDetails[_address].taskStatus[i]=_status;
         }
        
      }
        
    }
    
    

    function getContributorWalletBalance(address _walletAdd) view public returns(uint) {
        return ( contributorDetails[_walletAdd].tokensCount);
    }
    
    function transfer(address _to, uint256 _value) public payable returns (bool) {
        require(contributorDetails[msg.sender].tokensCount >= _value);           // Check if the sender has enough
        contributorDetails[msg.sender].tokensCount -= _value;                    // Subtract from the sender
        contributorDetails[_to].tokensCount += _value;                           // Add the same to the recipient
        return true;
    }
    
    // function Examination(uint8  a) public{
    //     examiner= msg.sender;
    // }
    
     // Modifiers can be used to change
    // the body of a function.
    // If this modifier is used, it will
    // prepend a check that only passes
    // if the function is called from
    // a examiner address.
    modifier onlyByExaminer()
    {
        require(msg.sender == examiner);
        
        _;
    }
    modifier beforeStartingExam(address participant){
        result[participant]=0;
        true;
        _;
    }
    function participateInExame(address participant) public beforeStartingExam(participant) returns(uint) {
        return 0;
    }
    
     function addscore(address participant,uint score) public onlyByExaminer returns(uint){
        
        result[participant]=score;
        return score;
    }
    function getScore(address participant) public view returns(uint){
        return result[participant];
    } 

     function addParticipants(address[] participant) public view returns(uint){
         result[participant[0]]=0;
          result[participant[1]]=0;
           result[participant[2]]=0;
           return 0;
    }  

    function sayHello() public returns (string) {
return "HEllO WORLD !!!!!! ankit srivastava";
}  
}
