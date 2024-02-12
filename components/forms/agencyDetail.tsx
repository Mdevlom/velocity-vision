"use client";
import { Agency } from "@prisma/client";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { NumberInput } from "@tremor/react";

import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useToast } from "../ui/use-toast";

import * as z from "zod";
import FileUpload from "../global/fileUpload";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import {
  deleteAgency,
  initUser,
  saveActivityLogsNotification,
  updateAgencyDetails,
  upsertAgency,
} from "@/lib/model/queries";
import { Button } from "../ui/button";
import { v4 } from "uuid";

type Props = {
  data?: Partial<Agency>;
};

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom de l'agence doit contenir au moins 2 caractéres.",
  }),
  companyEmail: z.string().min(1),
  companyPhone: z.string().min(1),
  whiteLabel: z.boolean(),
  address: z.string().min(1),
  city: z.string().min(1),
  zipCode: z.string().min(1),
  state: z.string().min(1),
  country: z.string().min(1),
  agencyLogo: z.string().min(1),
});

const AgencyDetails = ({ data }: Props) => {
  const { toast } = useToast();
  const router = useRouter();
  const [deletingAgency, setDeletingAgency] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: data?.name,
      companyEmail: data?.companyEmail,
      companyPhone: data?.companyPhone,
      whiteLabel: data?.whiteLabel || false,
      address: data?.address,
      city: data?.city,
      zipCode: data?.zipCode,
      state: data?.state,
      country: data?.country,
      agencyLogo: data?.agencyLogo,
    },
  });
  const isLoading = form.formState.isSubmitting;

  useEffect(() => {
    if (data) {
      form.reset(data);
    }
  }, [data]);

  const handleSubmit = async (values:z.infer<typeof FormSchema>) => {
     try {
      let newUserData;
      let customerId;
      let response
      if(!data?.id){
        const bodyData = {
          email: values.companyEmail,
          name: values.name,
          shipping: {
            address: {
              city: values.city,
              country: values.country,
              line1: values.address,
              postal_code: values.zipCode,
              state: values.state
            },
            name: values.name,
          },
          address: {
            city: values.city,
            country: values.country,
            line1: values.address,
            postal_code: values.zipCode,
            state: values.zipCode
          }
        }
      }
      newUserData =  await initUser({ role: 'AGENCY_OWNER'})
      if(!data?.id){
         response= await upsertAgency({
          id: data?.id ? data.id : v4(),
          address: values.address,
          agencyLogo: values.agencyLogo,
          city: values.city,
          companyPhone: values.companyPhone,
          country: values.country,
          name: values.name,
          state: values.state,
          whiteLabel: values.whiteLabel,
          zipCode: values.zipCode,
          createdAt: new Date(),
          updatedAt: new Date(),
          companyEmail: values.companyEmail,
          connectAccountId: '',
          goal: 5,
        })
      }
      toast({
        title: 'Crée un agence'
      })
      if (data?.id) return router.refresh()
      if (response){
        return router.refresh()
      }
     } catch (error) {
      console.log(error);
      toast({
        variant: 'destructive',
        title: "Oopse!",
        description: "n'a pas pu supprimer votre agence"
        }) 
     }

  };
  const handleDeleteAgency = async () => {
    if (!data?.id) return
    setDeletingAgency(true)
    //WIP: discontinue the subscription
    try {
      const response = await deleteAgency(data.id)
      toast({
        title: 'Deleted Agency',
        description: 'Deleted your agency and all subaccounts',
      })
      router.refresh()
    } catch (error) {
      console.log(error)
      toast({
        variant: 'destructive',
        title: 'Oppse!',
        description: 'could not delete your agency ',
      })
    }
    setDeletingAgency(false)
  }

  

  return (
    <AlertDialog>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Information Agence</CardTitle>
          <CardDescription>
            Allons creez votre agence de business. Vous pouvez apportez des
            modifications dans la section paramétres.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4"
            >
              <FormField
                disabled={isLoading}
                control={form.control}
                name="agencyLogo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Logo d'agence</FormLabel>
                    <FormControl>
                      <FileUpload
                        apiEndpoint="agencyLogo"
                        onChange={field.onChange}
                        value={field.value}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex md:flex-row  gap-4">
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Nom de l'agence</FormLabel>
                      <FormControl>
                        <Input placeholder="Le Nom Votre Agence " {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="companyEmail"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>L'Email de L'agence</FormLabel>
                      <FormControl>
                        <Input placeholder="L'email de l'agence " {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex md:flex-row gap-4">
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="companyPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Numéro de l'agence</FormLabel>
                      <FormControl>
                        <Input placeholder="Numéro " {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                disabled={isLoading}
                control={form.control}
                name="whiteLabel"
                render={({ field }) => {
                  return (
                    <FormItem className="flex flex-row items-center justify-between ronded-lg border gap-4 p-4">
                      <div>
                        <FormLabel>Agence de labellisation</FormLabel>
                        <FormDescription>
                          Si vous activez le mode "marque blanche", le logo de
                          votre agence apparaîtra sur tous les sous-comptes par
                          détail. Vous pouvez écraser cette fonctionnalité dans
                          les paramètres de votre compte.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
              <FormField
                disabled={isLoading}
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Addresse</FormLabel>
                    <FormControl>
                      <Input placeholder="32 Rue Pikine Ouest " {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex md:flex-row gap-4">
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Ville</FormLabel>
                      <FormControl>
                        <Input placeholder="Dakar " {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Code Postal</FormLabel>
                      <FormControl>
                        <Input placeholder="16000" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Region</FormLabel>
                      <FormControl>
                        <Input placeholder="Dakar" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex md:flex-row gap-4">
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Pays</FormLabel>
                      <FormControl>
                        <Input placeholder="Sénégal" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              {data?.id && (
                <div className="flex flex-col gap-2">
                  <FormLabel>Crée un But</FormLabel>
                  <FormDescription>
                    ✨ Crée un un but pour votre agence. A fur et à mesure que
                    votre entreprise développe, vos objectifs grandissent aussi,
                    alors n'oubliez pas de placer la bar plus haut.
                  </FormDescription>
                  <NumberInput
                    defaultValue={data?.goal}
                    onValueChange={async (val) => {
                      if (!data?.id) return;
                      await updateAgencyDetails(data.id, { goal: val });
                      await saveActivityLogsNotification({
                        agencyId: data.id,
                        description: `Mise à jour de le l'objectif de l'agence | ${val} pour le sous-compte`,
                        subaccountId: undefined,
                      });
                      router.refresh();
                    }}
                    min={1}
                    className="bg-background !border !border-input"
                    placeholder="But sous-compte"
                  />
                </div>
              )}
              <Button type='submit' disabled={isLoading}>
                Sauvegarder les informations relativede l'agence
              </Button>
            </form>
            </Form>
             {data?.id && (
            <div className="flex flex-row items-center justify-between rounded-lg border border-destructive gap-4 p-4 mt-4">
              <div>
                <div>Danger Zone</div>
              </div>
              <div className="text-muted-foreground">
                La suppression de votre agence ne peut être annulée. Cette opération supprimera 
                également tous les
                sous-comptes et toutes les données liées à vos sous-comptes. Les sous
                n'auront plus accès aux entonnoirs, aux contacts, etc.
              </div>
              <AlertDialogTrigger
                disabled={isLoading || deletingAgency}
                className="text-red-600 p-2 text-center mt-2 rounded-md hove:bg-red-600 hover:text-white whitespace-nowrap"
              >
                {deletingAgency ? 'Deleting...' : 'Delete Agency'}
              </AlertDialogTrigger>
            </div>
          )}
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-left">
                Êtes-vous absolument sûr ?
              </AlertDialogTitle>
              <AlertDialogDescription className="text-left">
                Cette action ne peut être annulée. Le compte de l'agence et 
                tous les sous-comptes qui y sont liés seront définitivement supprimés.
                et tous les sous-comptes associés.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex items-center">
              <AlertDialogCancel className="mb-2">Cancel</AlertDialogCancel>
              <AlertDialogAction
                disabled={deletingAgency}
                className="bg-destructive hover:bg-destructive"
                onClick={handleDeleteAgency}
              >
                Supprimé
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </CardContent>
      </Card>
    </AlertDialog>
  );
};

export default AgencyDetails;
