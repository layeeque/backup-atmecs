const mongooseModel = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
const Schema = mongooseModel.Schema;

var employeeSchema = new mongooseModel.Schema({
    empId: {
        type: String,
        default: ''
    },
    officialEmail: {
        type: String,
        default: ''
    },
    personalEmail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        default: ''
    },
   designation: {
    type: String,
    default: ''
   },
    isAtmecsEmp: {
        type: Boolean,
        default: false
    },
    roleId : {
        type: String,
        default: '3'
    },
    status : {
        type: String,
        default: 'Pending'
    },
    personalInfo: {
        firstName: {
            type: String,
            //uppercase:true
            // required: true
        },
        middleName: {
            type: String,
            //uppercase:true
        },
        lastName: {
            type: String,
            //uppercase:true
            // required: true
        },
        gender: {
            type: String
            // required: true
        },
        actualDOB: {
            type: String
            // required: true
        },
        officialDOB: {
            type: String
            // required: true
        },
        dateOfJoining: {
            type: String
            // required: true
        },
        currentAddress:{
            type: String

        },
        permanentAddress:{
            type: String

        },
        contactNo: {
            type: String
            // required: true
        },
        maritalStatus: {
            type: String,
            default:''
            // required: true
        },
        marriageDate: {
            type: String
        },
        // nationality: {
        //     type: String
        // },
        bloodGroup: {
            type: String,
            default:''
            // required: true
        },
        emergencyContactNo: {
            type: String
            // required: true
        },
        contactPerson: {
            type: String
            // required: true
        },
        relationshipWithEmployee: {
            type: String
            // required: true
        },
        emergencyAddress: {
            type: String
            // required: true
        },
        currentPinCode: {
            type: String
        },
        permanentPinCode : {
            type: String
        },
        panNo: {
            type: String
            // required: true
        },
        uanNo: {
            type: String
        },
        aadharNo: {
            type: String
            // required: true
        },
        nameAsPerAadhar: {
            type: String
            // required: true
        },
        bankAccountNo: {
            type: String
            // required: true
        },
        bankName: {
            type: String
            // required: true
        },
        ifscCode: {
            type: String
            // required: true
        },
        isVerified: {
            type: Boolean,
            default: false
        }
    },
    familyDetails: {
        fathersName: {
            type: String
           // // required: true
        },
        fathersDOB: {
            type: String
           // // required: true
        },
        mothersName: {
            type: String
           // // required: true
        },
        mothersDOB: {
            type: String
           // // required: true
        },
        spouseName: {
            type: String
        },
        spouseDOB: {
            type: String
        },
        hasChildren: {
            type: String
        },
        children: [{
            childName: {
                type: String
            },
            childDOB: {
                type: String
            },
            childGender: {
                type: String
            }
        }],
        isVerified: {
            type: Boolean,
            default: false
        }
    },
    technicalDetails: {
        technicalOrBusiness: [{
            certificateName: {
                type: String
            },
            certifiedBy: {
                type: String
            },
            completionDate: {
                type: String,
                default:''
            },
            marks: {
                type: String
            }
        }],
        isVerified: {
            type: Boolean,
            default: false
        }
    },
    skillSetDetails: {
        skillSet: [{
            skillName: {
                type: String
            },
            version: {
                type: String
            },
            rating: {
                type: String,
                default:''
            },
            experience: {
                year: {
                    type: String,
                    default:''
                },
                months: {
                    type: String,
                    default:''
                }
            },
            skillLevel: {
                type: String,
                default:''
            }
        }],
        isVerified: {
            type: Boolean,
            default: false
        }
    },
    employmentDetails: {
        employment: [{
            employerName: {
                type: String
            },
            employmentType: {
                type: String
            },
            designation: {
                type: String
            },
            experienceType: {
                type: String
            },
            startDate: {
                type: String
            },
            exitDate: {
                type: String
            },
            reasonForLeaving: {
                type: String
            },
            employeeContactNo: {
                type: String
            },
            employeeAddress: {
                type: String
            },
            referenceDetails: [{
                referenceName: {
                    type: String
                },
                referenceDesignation: {
                    type: String
                },
                referenceContactNo: {
                    type: String
                }
            }]
        }],
        isFresher:{
            type : Boolean,
            default: false
        },
        isVerified: {
            type: Boolean,
            default: false
        }
    },
    educationalDetails : {
        pg: [{
            qualification: {
                type : String,
                required : true
            },
            specialization: {
                type : String,
                required : true
            },
            eduType: {
                type : String,
                required : true
            },
            boardOrUniversityName: {
                type : String,
                required : true
            },
            startDate: {
                type : String,
                required : true
            },
            endDate: {
                type : String,
                required : true
            },
            percentage: {
                type : String,
                required : true
            },
            schoolOrCollegeName: {
                type : String,
                required : true
            },
            address: {
                type : String,
                required : true
            }
          }],
          graduation: [{
              qualification: {
                  type : String,
                  required : true
              },
              specialization: {
                  type : String,
                  required : true
              },
              eduType: {
                  type : String,
                  required : true
              },
              boardOrUniversityName: {
                  type : String,
                  required : true
              },
              startDate: {
                  type : String,
                  required : true
              },
              endDate: {
                  type : String,
                  required : true
              },
              percentage: {
                  type : String,
                  required : true
              },
              schoolOrCollegeName: {
                  type : String,
                  required : true
              },
              address: {
                  type : String,
                  required : true
              }
          }],
             diploma: [{
                 qualification: {
                     type : String,
                     required : true
                 },
                 specialization: {
                     type : String,
                     required : true
                 },
                 eduType: {
                     type : String,
                     required : true
                 },
                 boardOrUniversityName: {
                     type : String,
                     required : true
                 },
                 startDate: {
                     type : String,
                     required : true
                 },
                 endDate: {
                     type : String,
                     required : true
                 },
                 percentage: {
                     type : String,
                     required : true
                 },
                 schoolOrCollegeName: {
                     type : String,
                     required : true
                 },
                 address: {
                     type : String,
                     required : true
                 }
             }],
                hsc: [{
                    qualification: {
                        type : String,
                        required : true
                    },
                    specialization: {
                        type : String,
                        required : true
                    },
                    eduType: {
                        type : String,
                        required : true
                    },
                    boardOrUniversityName: {
                        type : String,
                        required : true
                    },
                    startDate: {
                        type : String,
                        required : true
                    },
                    endDate: {
                        type : String,
                        required : true
                    },
                    percentage: {
                        type : String,
                        required : true
                    },
                    schoolOrCollegeName: {
                        type : String,
                        required : true
                    },
                    address: {
                        type : String,
                        required : true
                    }
                }],
                   ssc: [{
                       qualification: {
                           type : String,
                           required : true
                       },
                       specialization: {
                           type : String,
                           required : true
                       },
                       eduType: {
                           type : String,
                           required : true
                       },
                       boardOrUniversityName: {
                           type : String,
                           required : true
                       },
                       startDate: {
                           type : String,
                           required : true
                       },
                       endDate: {
                           type : String,
                           required : true
                       },
                       percentage: {
                           type : String,
                           required : true
                       },
                       schoolOrCollegeName: {
                           type : String,
                           required : true
                       },
                       address: {
                           type : String,
                           required : true
                       }
                   }],
                      other: [{
                          qualification: {
                              type : String,
                              required : true
                          },
                          specialization: {
                              type : String,
                              required : true
                          },
                          eduType: {
                              type : String,
                              required : true
                          },
                          boardOrUniversityName: {
                              type : String,
                              required : true
                          },
                          startDate: {
                              type : String,
                              required : true
                          },
                          endDate: {
                              type : String,
                              required : true
                          },
                          percentage: {
                              type : String,
                              required : true
                          },
                          schoolOrCollegeName: {
                              type : String,
                              required : true
                          },
                          address: {
                              type : String,
                              required : true
                          }
                      }],
                    isVerified: {
                      type : Boolean,
                      default : false
                    }
    },
    passportAndVisaDetails: {
        passportNo: {
            type: String
        },
        passportIssueDate: {
            type: String
        },
        passportExpiryDate: {
            type: String
        },
        passportPlaceOfIssue: {
            type: String
        },
        nationality: {
            type: String
        },
        validVisa: {
            type: String
        },
        visaDetails: [{
            typeOfVisa: {
                type: String
            },
            visaToWhichCountry: {
                type: String
            },
            dateOfIssue: {
                type: String
            },
            dateOfExpiry: {
                type: String
            },
            visaPlaceOfIssue: {
                type: String
            },
            issuingCountry: {
                type: String
            }
        }],
        isVerified: {
            type: Boolean,
            default: false
        }
    },
    uploadDocs: {
        profilePicUrl: {
            type: String,
            default: ''
        },
        panUrl: {
            type: String,
            default: ''
        },
        aadharUrl: {
            type: String,
            default: ''
        },
        employmentDocs: [{
            type: String,
            default: ''
        }],
        educationalDocs: {
            type: String,
            default: ''
            // pgDocs: {
            //     type: String,
            //     default: ''
            // },
            // ugDocs: {
            //     type: String,
            //     default: ''
            // },
            // diplomaDocs: {
            //     type: String,
            //     default: ''
            // },
            // hscDocs: {
            //     type: String,
            //     default: ''
            // },
            // sscDocs: {
            //     type: String,
            //     default: ''
            // },
            // otherQualificationDocs: {
            //     type: String,
            //     default: ''
            // }
        },
        passportUrl: {
            type: String,
            default: ''
        },
        visaUrl: {
            type: String,
            default: ''
        },
        isVerified: {
            type: Boolean,
            default: false
        } 
    },
    updationDate: {
        type: String,
        default: new Date()
    },
    remarks:{
        type : String,
        default:''
    },
    hireSubmitted:{
        type : String,
        default :''
    }
});

employeeSchema.plugin(mongoosePaginate);

var empDetails = mongooseModel.model('employee', employeeSchema);

module.exports = empDetails;
