
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.grant_admin_for_designated_email() FROM PUBLIC, anon, authenticated;
