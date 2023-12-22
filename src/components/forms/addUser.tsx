import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NewUserForm } from './styled';
import { LoadingButton } from '@mui/lab';
import { Stepper, Step, StepLabel, Typography, Box, Button } from '@mui/material';
import Cookies from 'universal-cookie';
import { educationAndEmployment, guarantorInfo, personalInfoFields, personalInfoSelectFields, socials } from '../../configs/content';

export const AddUserForm = () => {
    const { register, handleSubmit } = useForm();
    const cookies = new Cookies();
    const token = cookies.get('TOKEN');
    const steps = ['Personal Information', 'Education and Employment', 'Socials'];
    const [skipped, setSkipped] = useState(new Set<number>());
    const [activeStep, setActiveStep] = useState(0);


    const isStepOptional = (step: number) => {
        return step === 1;
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const onSubmit = async (data: any) => {
        try {
            const response = await fetch('http://localhost:3001/dashboard/adduser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })

            const res = await response.json();
            console.log(res)
        } catch (err) {
            console.log(`${err} - encountered error`)
        }
    }

    const PersonalInformation = () => {
        return (
            <>
                {
                    personalInfoFields.map((field, index) => {
                        return (
                            <input
                                key={index}
                                placeholder={`Enter ${field.placeholder}`}
                                {...register(`personalInfo.${field.name}`, {
                                    required: true
                                })}
                            />
                        )
                    })
                }{
                    personalInfoSelectFields.map((field, index) => {
                        return (
                            <select
                                key={index}
                                placeholder={`${field.name}`}
                                {...register(`personalInfo.${field.name}`)}
                            >
                                <option value={`${field.option1}`}>{`${field.option1}`}</option>
                                <option value={`${field.option2}`}>{`${field.option2}`}</option>
                            </select>
                        )
                    })
                }
            </>
        )
    }

    const EducationAndEmployment = () => {
        return (
            <>
                {
                    educationAndEmployment.map((field, index) => {
                        return (
                            <select
                                key={index}
                                placeholder={`${field.name}`}
                                {...register(`personalInfo.${field.name}`)}
                            >
                                <option value={`${field.option1}`}>{`${field.option1}`}</option>
                                <option value={`${field.option2}`}>{`${field.option2}`}</option>
                            </select>
                        )
                    })
                }
            </>
        )
    }

    const Socials = () => {
        return (
            <>
                {
                    socials.map((field, index) => {
                        return (
                            <input
                                key={index}
                                placeholder={`Enter ${field.placeholder}`}
                                {...register(`personalInfo.${field.name}`, {
                                    required: true
                                })}
                            />
                        )
                    })
                }
            </>
        )
    }

    const GuarantorInformation = () => {
        return (
            <>
                {
                    guarantorInfo.map((field, index) => {
                        return (
                            <input
                                key={index}
                                placeholder={`Enter ${field.placeholder}`}
                                {...register(`personalInfo.${field.name}`, {
                                    required: true
                                })}
                            />
                        )
                    })
                }
            </>
        )
    }

    return (
        <NewUserForm onSubmit={handleSubmit(onSubmit)}>
            <Stepper
                className='stepper'
                activeStep={activeStep}
                sx={{
                    overflowX: "clip"
                }}
            >
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption">Optional</Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps} sx={{ overflowX: "clip" }}>
                            <StepLabel  {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {
                (() => {
                    switch (activeStep) {
                        case 0:
                            return (
                                <PersonalInformation />
                            );
                        case 1:
                            return (
                                <EducationAndEmployment />
                            );
                        case 2:
                            return (
                                <Socials />
                            );
                        case 3:
                            return (
                                <GuarantorInformation />
                            )
                        default:
                            return (
                                <PersonalInformation />
                            )
                    }

                })()
            }
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, overflowX: 'clip' }}>
                <Button
                    type='button'
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{
                        mr: 1,
                        padding: "1rem",
                        border: "none",
                        borderRadius: "8px",
                        outline: "none",
                    }}
                >
                    <Typography
                        variant='button'
                        fontFamily={"Avenir Next"}
                        fontWeight={600}
                        lineHeight={'normal'}
                        color={'inherit'}
                        textTransform={'uppercase'}
                        sx={{
                            fontSize: { laptop: '0.875rem' },
                        }}
                    >
                        Back
                    </Typography>
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                {isStepOptional(activeStep) && (
                    <Button
                        type='button'
                        color="inherit"
                        sx={{
                            mr: 1,
                            padding: "1rem",
                            border: "none",
                            borderRadius: "8px",
                            outline: "none",
                        }}
                        onClick={handleSkip}
                    >
                        <Typography
                            variant='button'
                            fontFamily={"Avenir Next"}
                            fontWeight={600}
                            lineHeight={'normal'}
                            color={'#213F7D'}
                            textTransform={'uppercase'}
                            sx={{
                                fontSize: { laptop: '0.875rem' },
                            }}
                        >
                            Skip
                        </Typography>
                    </Button>
                )}
                {
                    (activeStep === steps.length - 1) ?
                        <LoadingButton
                            type='submit'
                            loading={false}
                            disableElevation
                            sx={{
                                padding: "1rem",
                                border: "none",
                                borderRadius: "8px",
                                outline: "none",
                            }}
                        >
                            <Typography
                                variant='button'
                                fontFamily={"Avenir Next"}
                                fontWeight={600}
                                lineHeight={'normal'}
                                color={'#213F7D'}
                                textTransform={'uppercase'}
                                sx={{
                                    fontSize: { laptop: '0.875rem' },
                                }}
                            >
                                Add User
                            </Typography>
                        </LoadingButton>
                        :
                        <Button
                            type='button'
                            disableElevation
                            sx={{
                                padding: "1rem",
                                border: "none",
                                borderRadius: "8px",
                                outline: "none",
                            }}
                            onClick={handleNext}
                        >
                            <Typography
                                variant='button'
                                fontFamily={"Avenir Next"}
                                fontWeight={600}
                                lineHeight={'normal'}
                                color={'#213F7D'}
                                textTransform={'uppercase'}
                                sx={{
                                    fontSize: { laptop: '0.875rem' },
                                }}
                            >
                                Next
                            </Typography>
                        </Button>
                }
            </Box>
        </NewUserForm>
    )
}